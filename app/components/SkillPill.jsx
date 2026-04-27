export default function SkillPill({ name }) {
    return (
        <div className="
      px-4 py-2 
      rounded-full 
      bg-white/10 
      border border-white/20 
      text-white text-sm font-medium
      transition-all duration-300 ease-out
      hover:-translate-y-1 
      cursor-default
      inline-block
      m-1
    ">
            {name}
        </div>
    );
}