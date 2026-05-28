"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const refreshUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (editingId) {
      await fetch("/api/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, name, email })
      });
    } else {
      await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
      });
    }
    
    setName("");
    setEmail("");
    setEditingId(null);
    refreshUsers();
    setLoading(false);
  };

  const handleEdit = (user: User) => {
    setName(user.name);
    setEmail(user.email);
    setEditingId(user.id);
  };

  const handleDelete = async (id: number) => {
    await fetch("/api/users", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    refreshUsers();
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">User Management</h1>
        
        <form onSubmit={handleSubmit} className="bg-neutral-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Edit User" : "Add New User"}
          </h2>
          <div className="grid gap-4 mb-4">
            <Input
              label="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter name"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email"
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : editingId ? "Update User" : "Add User"}
          </Button>
          {editingId && (
            <Button 
              type="button" 
              variant="secondary" 
              onClick={() => {
                setEditingId(null);
                setName("");
                setEmail("");
              }}
              className="ml-2"
            >
              Cancel
            </Button>
          )}
        </form>

        <div className="bg-neutral-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          {users.length === 0 ? (
            <p className="text-neutral-400">No users yet. Add one above!</p>
          ) : (
            <ul className="space-y-3">
              {users.map((user) => (
                <li key={user.id} className="flex items-center justify-between p-3 bg-neutral-700 rounded">
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-neutral-400">{user.email}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => handleEdit(user)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(user.id)}>
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
