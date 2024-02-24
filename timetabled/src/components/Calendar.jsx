import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                <tr>
                    <th></th> {/* Empty cell for spacing */}
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* The first td, with className "time" is the hour */}
                        <td className="time">6:30 am</td>
                        {/* The remaining 7 cells will store any events for e/ day of the week */}
                        <td></td>
                        <Event event="Wake up" color="orange"/>
                        <Event event="Wake up" color="orange"/>
                        <Event event="Wake up" color="orange"/>
                        <Event event="Wake up" color="orange"/>
                        <Event event="Wake up" color="orange"/>
                        <td></td>
                    </tr>
                    <tr>
                        {/* The first td, with className "time" is the hour */}
                        <td className="time">7 am</td>
                        {/* The remaining 7 cells will store any events for e/ day of the week */}
                        <Event />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        {/* The first td, with className "time" is the hour */}
                        <td className="time">8 am</td>
                        {/* The remaining 7 cells will store any events for e/ day of the week */}
                        <Event />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <Event event="Wake up" color="orange"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Wake up" color="orange"/>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <Event event="Yoga" color="blue" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        {/* The first td, with className "time" is the hour */}
                        <td className="time">6 pm</td>
                        {/* The remaining 7 cells will store any events for e/ day of the week */}
                        <Event />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        {/* The first td, with className "time" is the hour */}
                        <td className="time">7 pm</td>
                        {/* The remaining 7 cells will store any events for e/ day of the week */}
                        <Event />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        {/* The first td, with className "time" is the hour */}
                        <td className="time">8 pm</td>
                        {/* The remaining 7 cells will store any events for e/ day of the week */}
                        <Event />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        {/* The first td, with className "time" is the hour */}
                        <td className="time">9 pm</td>
                        {/* The remaining 7 cells will store any events for e/ day of the week */}
                        <Event />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        {/* The first td, with className "time" is the hour */}
                        <td className="time">10 pm</td>
                        {/* The remaining 7 cells will store any events for e/ day of the week */}
                        <Event />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Calendar;