import React from 'react';
import {Logo} from "../../Logo";
import {Text} from "../../Text";
import {Copyright} from "../../Copyright";
import {Card} from "../../Card";
import style from './ProvidePage.module.css'
import classNames from "classnames";

const ProvidePage = () => {
    return (
        <>
            <div className="container">
                <Logo />
                <Text textStyle="providing">We're providing</Text>
                <div className={style.wrap}>
                    <Card cardStyle="providing__card">
                        <div className={style.content}>
                            <Text textStyle="number">1</Text>
            
                            <div className={style.content__text}>
                                <Text textStyle="providing__card-title">Unique offers</Text>
                                <Text textStyle="providing__card-text">Tested and battle-proven</Text>
                            </div>
                        </div>
                        <div className={style.content}>
                            <Text textStyle="number">2</Text>
            
                            <div className={style.content__text}>
                                <Text textStyle="providing__card-title">Stable payouts</Text>
                                <Text textStyle="providing__card-text">We're doing our best to retrieve compensation from our partners ASAP</Text>
                            </div>
                        </div>
                    </Card>
                    <Card cardStyle="providing__card">
                        <div className={style.content}>
                            <Text textStyle="number">3</Text>
            
                            <div className={style.content__text}>
                                <Text textStyle="providing__card-title">Our support for new players</Text>
                                <Text textStyle="providing__card-text">Just contact your manager to try it out</Text>
                            </div>
                        </div>
                        <div className={classNames(style.content, style.content__last)}>
                            <Text textStyle="number">4</Text>
            
                            <div className={style.content__text}>
                                <Text textStyle="providing__card-title">Call centre control</Text>
                                <Text textStyle="providing__card-text">We're monitoring all traffic and every lead is on count</Text>
                            </div>
                        </div>
                    </Card>
                </div>
            
                <div className={style.copy}>
                    <Copyright />
                </div>
            </div>
        </>
    )
}

export default React.memo(ProvidePage)