"use client";

interface CountdownCardProps {
    name: string;
    image: string;
    gradient?: string;
    path: string;
    children: any;
}

const CountdownCard: React.FC<CountdownCardProps> = ({ name, path, image, gradient, children }) => {
    return (
        <div className="w-fit group">
            <a href={path} className="flex flex-col gap-2">
                <div className={`bg-cover bg-center h-40 w-60 sm:h-48 sm:w-80 rounded-md border border-slate-700 group-hover:border-slate-400 relative transition-all duration-200`} style={{
                    backgroundImage: `${gradient}, url('/images/${image}')`,
                }}>
                    <span className="bg-green-800/60 border border-green-700 p-1 text-xs font-light rounded-md absolute top-2 left-2">Celebration</span>
                    {children}
                </div>
                <h3 className="text-lg font-semibold">{name}</h3>
            </a>
        </div>
    )
}

export default CountdownCard;