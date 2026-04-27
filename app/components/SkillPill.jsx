export default function SkillPill({ name }) {
    return (
        <div className="
      px-4 py-2 
      rounded-full 
      bg-white/10 
      backdrop-blur-md 
      border border-white/20 
      text-white text-sm font-medium
      transition-all duration-300 ease-out
      hover:bg-white/30 
      hover:-translate-y-1 
      hover:shadow-[0_5px_15px_rgba(255,255,255,0.1)]
      cursor-default
      inline-block
      m-1
    ">
            {name}
        </div>
    );
}