import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { 
  Car, Users, MessageSquare, Image as ImageIcon, Map,
  LogOut, PlusCircle, Trash2, ShieldCheck, Edit3, Menu, X 
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('domestic'); 
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [form, setForm] = useState({
    name: '', category: '', seats: '', description: '', 
    text: '', image: null, title: '', subtitle: '', 
    display_order: 1, duration: '', slug: ''
  });

  const [itinerary, setItinerary] = useState([{ day: 'Day 1', title: '', desc: '' }]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const shouldOrder = ['hero_slides', 'cars', 'clients'].includes(activeTab);
    const { data, error } = await supabase
      .from(activeTab)
      .select('*')
      .order(shouldOrder ? 'display_order' : 'created_at', { ascending: shouldOrder });
    if (!error) setDataList(data);
    setLoading(false);
  }, [activeTab]);

  useEffect(() => {
    fetchData();
  }, [activeTab, fetchData]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    const { error } = await supabase.from(activeTab).delete().eq('id', id);
    if (!error) { alert("Removed!"); fetchData(); }
  };

  const startEdit = (item) => {
    setEditId(item.id);
    setForm({
      ...form,
      name: item.name || '',
      category: item.category || '',
      seats: item.seats || '',
      description: item.description || '',
      text: item.text || '', 
      title: item.title || '',
      subtitle: item.subtitle || item.sub_title || '',
      display_order: item.display_order || 1,
      duration: item.duration || '',
      slug: item.slug || ''
    });
    if(item.itinerary) setItinerary(item.itinerary);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let publicUrl = editId ? dataList.find(i => i.id === editId).image_url || dataList.find(i => i.id === editId).logo_url : '';

      if (form.image) {
        const bucketName = activeTab === 'domestic' ? 'tour-images' : '';
        const fileName = `${Date.now()}_${form.image.name}`;
        await supabase.storage.from(bucketName).upload(fileName, form.image);
        publicUrl = supabase.storage.from(bucketName).getPublicUrl(fileName).data.publicUrl;
      }

      let payload = {}; 
      if (activeTab === 'domestic') {
        payload = { title: form.title, sub_title: form.subtitle, category: form.category, duration: form.duration, slug: form.slug, itinerary: itinerary, image_url: publicUrl };
      } 

      const { error } = editId 
        ? await supabase.from(activeTab).update(payload).eq('id', editId)
        : await supabase.from(activeTab).insert([payload]);

      if (error) throw error;
      alert("Success!");
      setEditId(null);
      setForm({ name: '', category: '', seats: '', description: '', text: '', image: null, title: '', subtitle: '', display_order: 1, duration: '', slug: '' });
      setItinerary([{ day: 'Day 1', title: '', desc: '' }]);
      fetchData();
    } catch (err) { alert(err.message); } finally { setLoading(false); }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden relative">
      <aside className={`fixed inset-y-0 left-0 w-64 bg-[#0a1128] text-white flex flex-col h-full z-50 transition-transform lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-blue-500" />
            <h1 className="text-xl font-black tracking-tighter uppercase">TravelExpress</h1>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden"><X size={24} /></button>
        </div>
        <nav className="flex-1 p-4 space-y-2 mt-4 overflow-y-auto">
          <TabButton Icon={Map} label="Tour Packages" active={activeTab === 'domestic'} onClick={() => setActiveTab('domestic')} />
           </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={() => navigate('/admin-login')} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 font-bold uppercase text-[10px]"><LogOut size={18}/> Logout</button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-full w-full overflow-hidden">
        <header className="h-20 bg-white border-b px-4 lg:px-8 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-gray-600"><Menu size={24} /></button>
            <h2 className="text-xl font-black uppercase">Admin <span className="text-blue-600 italic">Control</span></h2>
          </div>
          <div className="text-[13px] font-bold text-green-500 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> <span>Server Live</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            <div className="lg:col-span-1">
              <div className="bg-white p-4 border border-gray-200 sticky top-0 h-fit shadow-sm">
                <h3 className="font-black uppercase text-xs mb-4 flex items-center gap-2 text-blue-600">
                  <PlusCircle size={16}/> {editId ? 'Update' : 'Add New'} {activeTab}
                </h3>
                <form onSubmit={handleUpload} className="space-y-3">
                  {activeTab === 'domestic' && (
                    <>
                      <Input label="Tour Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
                      <Input label="Category" value={form.category} onChange={e => setForm({...form, category: e.target.value})} required />
                      <div className="grid grid-cols-2 gap-2">
                        <Input label="Slug" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} required />
                        <Input label="Duration" value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} />
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-[11px] font-bold uppercase text-gray-400 mb-2 flex justify-between">
                          Itinerary <button type="button" onClick={() => setItinerary([...itinerary, { day: `Day ${itinerary.length + 1}`, title: '', desc: '' }])} className="text-blue-600">+ Add</button>
                        </p>
                        <div className="max-h-60 overflow-y-auto space-y-2">
                          {itinerary.map((step, idx) => (
                            <div key={idx} className="flex gap-2 items-center bg-gray-50 p-2 border">
                              <span className="text-[12px] font-bold">D{idx+1}</span>
                              <input className="flex-1 text-[15px] p-1 border outline-none" placeholder="Title" value={step.title} onChange={e => {
                                const up = [...itinerary]; up[idx].title = e.target.value; setItinerary(up);
                              }} />
                              <button type="button" onClick={() => setItinerary(itinerary.filter((_, i) => i !== idx))}><Trash2 size={12} className="text-red-400"/></button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 font-black text-[10px] uppercase tracking-widest mt-2 hover:bg-black transition-colors">
                    {loading ? "Processing..." : (editId ? "Update" : "Save")}
                  </button>
                  {editId && <button type="button" onClick={() => setEditId(null)} className="w-full text-[10px] uppercase font-bold text-gray-400 mt-2 text-center">Cancel</button>}
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white border border-gray-200 shadow-sm overflow-hidden h-fit">
              <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                <h3 className="font-black uppercase text-xs">Live Inventory</h3>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{dataList.length} Items</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white border-b text-[11px] font-black uppercase text-gray-400">
                    <tr><th className="p-4">Entry</th><th className="p-4 text-right">Actions</th></tr>
                  </thead>
                  <tbody className="divide-y">
                    {dataList.map(item => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            {(item.image_url || item.logo_url) ? (
                              <img src={item.image_url || item.logo_url} className="h-12 w-16 object-cover rounded" alt="" />
                            ) : (
                              <div className="h-12 w-16 bg-blue-100 flex items-center justify-center text-blue-600 font-bold rounded text-xs">NA</div>
                            )}
                            <div>
                              <p className="font-bold text-xs uppercase tracking-tight">{item.title || item.name}</p>
                              <p className="text-[10px] text-blue-500 font-bold uppercase">{item.category || item.duration || 'Active'}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button onClick={() => startEdit(item)} className="p-2 text-blue-500 hover:bg-blue-50 rounded"><Edit3 size={16}/></button>
                          <button onClick={() => handleDelete(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded"><Trash2 size={16}/></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const TabButton = ({ Icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-3 px-4 py-3 transition-all ${active ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:bg-white/5'}`}>
    <Icon size={18} /> <span className="font-bold text-xs uppercase">{label}</span>
  </button>
);

const Input = ({ label, ...props }) => (
  <div className="space-y-1">
    <label className="text-[9px] font-bold uppercase text-gray-400 ml-1">{label}</label>
    <input {...props} className="w-full bg-gray-50 border p-2 text-xs outline-none focus:border-blue-500 transition-all" />
  </div>
);

export default AdminDashboard;