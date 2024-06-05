import { IconBrandLinkedin, IconLayersLinked } from "@tabler/icons-react";

const Footer = () => {
    return ( 
        <div className="w-full h-[30vh] text-neutral-400  flex items-center justify-center flex-col border-t-2 border-neutral-600 mt-6">
            <div className="h-[90%] flex items-center justify-center flex-col gap-[2rem]">
            <h2 className="text-md font-light">Connect with me</h2>
            <div className="flex items-center justify-center gap-10" >
                <a href="https://www.linkedin.com/in/manmeetnagi/" target="_blank">
                    <img src="/linkedin.svg" alt=""/>
                </a>
                <a href="https://github.com/manmeetnagii" target="_blank">
                    <img src="/github.svg" alt=""/>
                </a>
                <a href="https://leetcode.com/u/manmeetnagii/" target="_blank">
                    <img src="/leetcode.svg" alt=""/>
                </a>
                <a href="https://twitter.com/manmeetnagiii" target="_blank">
                    <img src="/twitter.svg" alt=""/>
                </a>
            </div>
            </div>
            
            <div className="h-[10%]">
                <p className="text-neutral-500">&copy;2024 Manmeet Nagi. All rights reserved.</p>
            </div>
        </div>
     );
}
 
export default Footer;