import PlayerVideo from "@/app/Components/PlayerVideo";

export default function Home() {
    return (
        <section>
            <h1>NBA</h1>
            <div className="grid_container border-2 border-red-500 grid grid-cols-3 grid-flow-row gap-2 text-center">
                <div className="grid__child border-2 border-white aspect-video overflow-hidden">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/01fz1gvHRxg?si=x-LQqOyf2A6NGcAT"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
                <div className="grid__child border-2 border-white">video</div>
            </div>
        </section>
    );
}
