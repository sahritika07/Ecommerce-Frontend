import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Ritika Sah");
  const [email, setEmail] = useState("ritika@gmail.com");
  // const [bio, setBio] = useState("MERN Stack Developer ");
  const [address, setAddress] = useState("Paris, London");
  const [phone, setPhone] = useState("+1 234 567 890");
  // const [website, setWebsite] = useState("https://ritikasah.dev");

  return (
    <div className="flex justify-center   bg-gradient-to-b from-teal-50 to-cyan-100">
      <Card className="w-full max-w-lg p-6 shadow-lg">
        <CardHeader className="text-center">
          <Avatar className="mx-auto w-16 h-16">
            <AvatarImage src="https://via.placeholder.com/150" alt="User Avatar" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 text-2xl font-semibold">{name}</CardTitle>
          <p className="text-gray-500">{email}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
      
          <div>
            <label className="text-sm text-gray-600">Address</label>
            <Input value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
      
          <Button className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
