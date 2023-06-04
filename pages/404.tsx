import '../style/globals.css'
import Navigation from '@/components/Navigation';

export default function Custom404() {
    return (
        <div>
            <Navigation />
            <div className="flex flex-col items-center justify-center h-[75vh]">
                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="text-2xl">Page not found</h2>
            </div>
        </div>
    );
}