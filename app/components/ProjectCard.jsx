export default function ProjectCard({ project, onClick }) {

    const { title, description, image, images, status, isLocked } = project;

    const displayImage = (images && images.length > 0) ? images[0] : (image || "/cipher.png");

    return (
        <div
            onClick={() => !isLocked && onClick(project)}
            className={`relative p-6 rounded-3xl border-2 transition-all duration-300 w-80 
        ${isLocked ? 'opacity-50 grayscale cursor-default' : 'cursor-pointer hover:-translate-y-2 hover:shadow-xl'}
        bg-blue-200 border-blue-900`}
        >

            <div className="mt-4 bg-white rounded-2xl h-40 flex items-center justify-center overflow-hidden border border-yellow-100">
                {isLocked ? (
                    <span className="text-4xl">X</span>
                ) : (
                    <img
                        src={displayImage}
                        alt={title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                )}
            </div>

            <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
}