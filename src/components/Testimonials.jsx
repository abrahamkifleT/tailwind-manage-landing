import React from 'react'
import avatarAnisha from '../assets/img/avatar-anisha.png'
import avatarAli from '../assets/img/avatar-ali.png'
import avatarRichard from '../assets/img/avatar-richard.png'

function Testimonials() {
    return (
        <section id="testimonials">
            {/* Container to heading and testimonal blocks */}
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                {/* Heading  */}
                <h2 className="text-4xl font-bold text-center">
                    What's different about Manage?
                </h2>

                {/* Testimonial Container */}

                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    {/* Testimonial 1 */}
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                        <img src={avatarAnisha} alt="" className='w-16 -mt-14' />
                        <h5 className="text-lg font-bold">Anisha Li</h5>
                        <p className="text-sm  text-darkGrayishBlue">
                            "Manage has supercharged our team's workflow. The ability to visibility on large milestones at any time helps the team stay focused and motivated as we push through busy sprints."
                        </p>
                    </div>

                    {/* Testimonial 2 */}

                    <div className="hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                        <img src={avatarAli} alt="" className='w-16 -mt-14' />
                        <h5 className="text-lg font-bold">Ali Bravo</h5>
                        <p className="text-sm  text-darkGrayishBlue">
                            "We have been able to cancel so many other subscriptions since using Manage. There is no way we would have stayed with them for long."
                        </p>
                    </div>

                    {/* Testimonial 3 */}

                    <div className="hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                        <img src={avatarRichard} alt="" className='w-16 -mt-14' />
                        <h5 className="text-lg font-bold">Richard Watts</h5>
                        <p className="text-sm  text-darkGrayishBlue">
                            "Manage has supercharged our team's workflow. The ability to visibility on large milestones at any time helps the team stay focused and motivated as we push through busy sprints."
                        </p>
                    </div>
                </div>
                {/* Button  */}
                <div className="my-16">
                   <a href="" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
                </div>
            </div>
        </section>
    )
}

export default Testimonials