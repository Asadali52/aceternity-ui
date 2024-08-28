'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from 'react';


const Tabss = () => {

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleButtonClick = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div>
      <Tabs defaultValue="account" className="w-full p-0">
        <TabsList className="flex justify-start">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="3rd one">Stats</TabsTrigger>
          <TabsTrigger value="card">Products</TabsTrigger>
          <TabsTrigger value="password">Orders</TabsTrigger>
          <TabsTrigger value="5 one">Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="bg-teal-600 h-[50vh] w-[50%] text-white text-[150px] font-[600] leading-[50vh] text-center mx-auto">
            <h1>Account</h1>
          </div>
        </TabsContent>
        <TabsContent value="3rd one">
          <div className="bg-teal-600 h-[50vh] w-[50%] text-white text-[150px] font-[600] leading-[50vh] text-center mx-auto">
            <h1>Stats</h1>
          </div>
        </TabsContent>
        <TabsContent value="card">
          <div className="bg-teal-600 h-[50vh] w-[50%] text-white text-[150px] font-[600] leading-[50vh] text-center mx-auto">
            <h1>Products</h1>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="bg-teal-600 h-[50vh] w-[50%] text-white text-[150px] font-[600] leading-[50vh] text-center mx-auto">
            <h1>Orders</h1>
          </div></TabsContent>
        <TabsContent value="5 one">
          <div className="bg-teal-600 mb-4 h-[50vh] w-[50%] text-white text-[150px] font-[600] leading-[50vh] text-center mx-auto">
            <h1>Payments</h1>
          </div>
          <div className="relative">
            <p
              className="text-[16px] px-5 py-3 cursor-pointer full-map-button bg-teal-600 text-white absolute right-2 top-2 rounded-[15px]"
              onClick={handleButtonClick}
            >
              click me!
            </p>
            <iframe
              className={`rounded-[20px] transition-all duration-500 ease-in-out ${isFullScreen ? 'h-[100vh]' : 'h-[500px]'}`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.7241243699464!2d-119.7760456246257!3d36.82513016629456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945dc63cbd0a7d%3A0x1ca9eefd4f503193!2sHaraz%20Dental!5e0!3m2!1sen!2s!4v1697391500276!5m2!1sen!2s"
              width="100%"
            ></iframe>
          </div>
        </TabsContent>
      </Tabs>

    </div>
  );
};

export default Tabss;