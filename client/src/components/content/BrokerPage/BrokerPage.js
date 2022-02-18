import React from 'react';
import {Logo} from "../../Logo";
import {Text} from "../../Text";
import {Card} from "../../Card";
import {Copyright} from "../../Copyright";
import {Form} from "../../Form";
import style from "./BrokerPage.module.css";

const BrokerPage = () => {
    return (
        <>
            <div className="container">
                <Logo />
                <Text textStyle="broker">Finding the right partners can be difficult, now you can leave it to us</Text>
                <div className={style.wrap}>
                    <Card cardStyle="broker__card-first">
                        <div className={style.item}>
                            Our team worked in both mediabuying and brokers.
                            We know it's not about the numbers. It's not even about the traffic. It's about your leads, clients and quality customer service
                        </div>
                        <div className={style.item}>
                            So we keep traction -
                            your call center and feedback is valuable to us - it helps us select the most convertible offers in a timely manner and give you the expected results
                        </div>
                    </Card>
                    <Card cardStyle="broker__card-second">
                        <Text textStyle="form__title">Get a high-quality traffic</Text>
                        <Form type="broker" />
                    </Card>
                </div>
            
                <div className={style.copy}>
                    <Copyright />
                </div>
            </div>
        </>
    )
}

export default React.memo(BrokerPage)