import React from 'react';
import {Logo} from "../../Logo";
import {Text} from "../../Text";
import {Card} from "../../Card";
import {Copyright} from "../../Copyright";
import {Form} from "../../Form";
import style from "./СontactPage.module.css";

const СontactPage = () => {
    return (
        <>
            <div className="container">
                <Logo />
                <Text textStyle="contact">We are the Tribe</Text>
                <div className={style.wrap}>
                    <Card cardStyle="contact__card-first">
                        <div className={style.item}>
                            Buyers — we know what hurts you everyday
                        </div>
                        <div className={style.item}>
                            2 years in operation and already saw ups and downs
                        </div>
                        <div className={style.item}>
                            Top-notch managers who know how to find a win-win point in a cooperation
                        </div>
                        <div className={style.item}>
                            People that used other affiliate networks, but were not happy with them
                        </div>
                    </Card>
                    <Card cardStyle="contact__card-second">
                        <Text textStyle="form__title">Make leads happen while we do the rest</Text>
                        <Form type='buyer' />
                    </Card>
                </div>
            
                <div className={style.copy}>
                    <Copyright />
                </div>
            </div>
        </>
    )
}

export default React.memo(СontactPage)