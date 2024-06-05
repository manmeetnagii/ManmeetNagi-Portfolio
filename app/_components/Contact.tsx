"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";
import { Textarea } from "@/components/ui/textarea";


export function SignupFormDemo() {

 
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e:any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_APP_EMAILJS_SERVICE_ID!,
        process.env.NEXT_APP_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Manmeet Nagi",
          from_email: form.email,
          to_email: "manmeetnagiii@gmail.com",
          message: form.message,
        },
        process.env.NEXT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast("Thank you. I will get back to you as soon as possible.");
        

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  const [loading, setLoading] = useState(false);

  return (
   
     <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <h2 className="font-bold text-xl text-neutral-200">
        Get In Touch
      </h2>
      <p className=" text-sm max-w-sm mt-2 text-neutral-300">
      Feel free to reach out to me, whether you have questions, feedback, or just want to say hello, I&apos;d love to hear from you! Please fill out the fields and I&apos;ll get back to you as soon as possible.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Your name</Label>
            <Input id="firstname" name='name' placeholder="Tyler" type="text" value={form.name} onChange={handleChange}/>
          </LabelInputContainer>
          
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name='email' placeholder="projectmayhem@fc.com" type="email" value={form.email} onChange={handleChange}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Your Message</Label>
          <Textarea name='message' id="email" placeholder="What you want to say?" value={form.message} onChange={handleChange} />
        </LabelInputContainer>
       

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {loading ? "Sending..." : (
            <span>Send &rarr;</span>
          )}
          
          <BottomGradient />
        </button>
        <ToastContainer 
        position="bottom-right"
        theme="dark"
        />

        
      </form>
    </div>
  
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
