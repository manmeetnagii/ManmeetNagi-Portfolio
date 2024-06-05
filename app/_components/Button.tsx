import ShimmerButton from "@/components/ui/button";

export function ShimmerButtonDemo(title:any) {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <a  style={{ pointerEvents: 'auto' }} href="https://google.com" target="_blank" className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg z-[9999999999]">
         <span>Get Resume</span>
        </a>
      </ShimmerButton>
    </div>
  );
}
