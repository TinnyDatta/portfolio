
const Projects = () => {
    return (
        <div>
            <div className="card bg-base-100 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="card-body bg-blue-200">
                        <h2 className="card-title">Fitness Blender</h2>
                        <div>
                            <h2 className="text-xl">Features</h2>
                            <li>Detaild info about trainers and option to choose the best one</li>
                            <li>Users can view detailed information about each class, including time, trainer, and location.</li>
                            <li>User Authentication & Authorization</li>
                        </div>
                        <div>
                            <h2 className="text-xl">Technologies</h2>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Mongodb</li>
                            <li>Firebase</li>
                        </div>

                        <p>It is a fitness related website. Individual can visit the site where he can see the detailed trainers information, classes schedule. Also one to one session are available. There are also have the chance to get nutritional sessions. Also users personal information will be safe.</p>
                        <p className="font-bold">## Website Live Link, Github Client Side Link and Github Server Side Link --- </p>
                        <div className="card-actions justify-end">
                            <a href="https://fitness-blender-f431e.web.app/" className="badge badge-outline">website </a>
                            <a href="https://github.com/TinnyDatta/fitness-blender-client" className="badge badge-outline">client</a>
                            <a href="https://github.com/TinnyDatta/fitness-blender-server" className="badge badge-outline">server</a>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;