import { ReactNode, createContext, useState } from "react";
import { useForm, UseFormRegister, UseFormHandleSubmit } from "react-hook-form"
import { GetLinkFormData, getLinkFormSchema } from "../utils/zod/get-link-zod";
import { zodResolver } from "@hookform/resolvers/zod"

interface ShortLinkProviderProps {
  children: ReactNode
}

interface ShortLinkData {
  errors: any;
  register: UseFormRegister<GetLinkFormData>;
  // register: any;
  handleSubmit: UseFormHandleSubmit<GetLinkFormData>;
  // handleSubmit: any;
  linksShorted: any;
  setLinksShorted: any;
  isSubmitting: boolean;
  handleShortedLink: (data: GetLinkFormData) => void;
}

export interface LinkShortedProps {
  lastLink: string;
  newLink: {
    result_url: string;
  };
}

export const ShortLinkContext = createContext({} as ShortLinkData)

export function ShortLinkProvider( { children }: ShortLinkProviderProps ) {
  const { 
    reset,
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
   } = useForm<GetLinkFormData>({
    resolver: zodResolver(getLinkFormSchema)
   })

  const [ linksShorted, setLinksShorted ] = useState<LinkShortedProps[]>([])

  async function handleShortedLink(data: GetLinkFormData) {
    try {
      const lastLink = String(data.link)
      const domain = new URL(data.link).hostname  
      const finalUrl = "https://cleanuri.com/api/v1/shorten";
      const response = await fetch(finalUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `url=https%3A%2F%2F${domain}%2F`
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const cat = await response.json();
      setLinksShorted([...linksShorted, {
        lastLink,
        newLink: cat,
      }])
      console.log(cat)
      reset()

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  return (
    <ShortLinkContext.Provider
      value={{
        errors,
        register,
        handleSubmit,
        isSubmitting,
        linksShorted,
        setLinksShorted,
        handleShortedLink,
      }}
    >
      {children}
    </ShortLinkContext.Provider>
  )
}