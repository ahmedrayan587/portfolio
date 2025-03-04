interface ProjectCardProps{
    title:string;
    description:string;
    image:string;
    github:string;
    live:string;
}

export default function ProjectCard({title,description,image,github,live}:ProjectCardProps) {
  return (
    <div className="group relative h-96 w-72 [perspective:1000px] m-5 ml-0">
        <div
        className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
        >
        <div
            className="absolute w-full h-full rounded-xl bg-gradient-to-br from-teal-500 to-[#87d435] p-[3px] text-white [backface-visibility:hidden]"
        >
            <img src={image} alt={title} className="w-full h-full rounded-[9px] object-cover" />
        </div>

        <div
            className="absolute w-full h-full rounded-xl bg-gradient-to-br from-teal-500 to-[#87d435] p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
            <div className="flex flex-col h-full">
            <div className="text-2xl font-bold mb-4">{title}</div>
            <div className="flex-grow">
                <p className="text-lg line-clamp-7 text-ellipsis">
                {description}
                </p>
            </div>
            <div className="flex justify-between items-center mt-auto">
                <a
                href={github} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-teal-500 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                GitHub
                </a>
                <a
                href={live} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-teal-500 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                Live Demo
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
