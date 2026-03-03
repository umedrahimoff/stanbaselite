export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Register</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border rounded-lg px-4 py-2" />
        <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2" />
        <input type="password" placeholder="Password" className="w-full border rounded-lg px-4 py-2" />
        <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded-lg">Register</button>
      </form>
    </div>
  );
}
