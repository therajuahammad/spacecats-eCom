const Countdown = () => {
    return (
        <div className="hero__count">
            <div className="hero__count__title">
                <h3 className="text-capitalize fw-bold">50% Discount Till</h3>
            </div>
            <ul className="p-0 m-0">
                <li>
                    <span className="days">40</span>
                    <p className="seperator">:</p>
                    <p className="days_text">Days</p>
                </li>
                <li>
                    <span className="hours">33</span>
                    <p className="seperator">:</p>
                    <p className="hours_text">Hours</p>
                </li>
                <li>
                    <span className="minutes">21</span>
                    <p className="seperator">:</p>
                    <p className="minutes_text ms-0">Minutes</p>
                </li>
                <li>
                    <span className="seconds">84</span>
                    <p className="seperator opacity-0">:</p>
                    <p className="seconds_text ms-0">Seconds</p>
                </li>
            </ul>
        </div>
    );
};

export default Countdown;
