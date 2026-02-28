// Services.jsx
export default function Services() {
  return (
    <section id="services" className="min-h-screen bg-white p-16">
      <h2 className="text-4xl font-bold mb-6">Services</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 shadow rounded">Web Design</div>
        <div className="p-6 shadow rounded">Frontend Dev</div>
        <div className="p-6 shadow rounded">SEO</div>
      </div>
    </section>
  );
}