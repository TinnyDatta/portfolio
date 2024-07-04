/* eslint-disable react/no-unescaped-entities */

const Projects = () => {
    return (
        <div>
             <h2 className="relative text-center text-2xl font-bold mt-10 mb-3 ">Some projects of mine</h2>
            <div className="card bg-base-100 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="card-body bg-rose-100">
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
                            <a href="https://fitness-blender-f431e.web.app" className="badge badge-outline">website </a>
                            <a href="https://github.com/TinnyDatta/fitness-blender-client" className="badge badge-outline">client</a>
                            <a href="https://github.com/TinnyDatta/fitness-blender-server" className="badge badge-outline">server</a>
                        </div>
                    </div>
                    <div className="card-body bg-blue-200">
                        <h2 className="card-title">HotelHive</h2>
                        <div>
                            <h2 className="text-xl">Features</h2>
                            <li>Room Listing: View a list of available rooms with details.</li>
                            <li>Booking Functionality: Book a room for a specific date and time</li>
                            <li>Booking Management: View and cancel existing bookings.</li>
                        </div>
                        <div>
                            <h2 className="text-xl">Technologies</h2>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Mongodb</li>
                            <li>Firebase</li>
                        </div>

                        <p>Hotel Hive is a place where user will be able to book room for staying safely. As there are various types and ranges of hotel room, one can select according to their need and budget. Also by booking before the trip one can remain tension free. Also one can enjoy living in city, beach side hotel. So, it is a great place to find your comfortable hotel room.</p>
                        <p className="font-bold">## Website Live Link, Github Client Side Link and Github Server Side Link --- </p>
                        <div className="card-actions justify-end">
                            <a href="https://boisterous-strudel-2d14a7.netlify.app" className="badge badge-outline">website </a>
                            <a href="https://github.com/TinnyDatta/hotel-hive-client" className="badge badge-outline">client</a>
                            <a href="https://github.com/TinnyDatta/hotel-hive-server" className="badge badge-outline">server</a>
                        </div>
                    </div>
                    <div className="card-body bg-green-50">
                        <h2 className="card-title">Dream Travello</h2>
                        <div>
                            <h2 className="text-xl">Features</h2>
                            <li> Online booking and reservations</li>
                            <li>Comprehensive Destination Information</li>
                            <li> Contact Access for Knowing Upcoming Tours</li>
                        </div>
                        <div>
                            <h2 className="text-xl">Technologies</h2>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Mongodb</li>
                            <li>Firebase</li>
                        </div>

                        <p>It is a wonderful place for them who always find opportunity to travel. As we have tour guide, one do not have to scared about safety.Also one can add their favorite place and our member will arrange a trip to place. Isn't it just wow! Also as it offer group tour and need comparatively small amount, one can save a lot of money</p>
                        <p className="font-bold">## Website Live Link, Github Client Side Link and Github Server Side Link --- </p>
                        <div className="card-actions justify-end">
                            <a href="https://dream-travello-client.web.app" className="badge badge-outline">website </a>
                            <a href="https://github.com/TinnyDatta/dream-travello-client" className="badge badge-outline">client</a>
                            <a href="https://github.com/TinnyDatta/dream-travello-server" className="badge badge-outline">server</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;