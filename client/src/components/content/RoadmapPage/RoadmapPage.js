import React from 'react';
import classNames from "classnames";
import {Logo} from "../../Logo";
import {Text} from "../../Text";
import {Copyright} from "../../Copyright";
import {Card} from "../../Card";
import style from './RoadmapPage.module.css'

const RoadmapPage = () => {
    return (
        <>
            <div className="container">
                <Logo />
                <Text textStyle="roadmap">Why choose us</Text>
                <div className={style.wrap}>
                    <Card cardStyle="roadmap__card">
                        <div className={style.content}>
                            <Text textStyle="number">1</Text>
            
                            <div className={style.content__text}>
                                <Text textStyle="roadmap__card-title">2 years of incredible results</Text>
                                <Text textStyle="roadmap__card-text">Ups and downs, we know the ropes</Text>
                            </div>
                        </div>
                        <div className={style.content}>
                            <Text textStyle="number">2</Text>
            
                            <div className={style.content__text}>
                                <Text textStyle="roadmap__card-title">150,000+ Leads</Text>
                                <Text textStyle="roadmap__card-text">We expanded 10x last year and carrying on</Text>
                            </div>
                        </div>
                    </Card>
                    <Card cardStyle="roadmap__card">
                        <div className={style.content}>
                            <Text textStyle="number">3</Text>
            
                            <div className={style.content__text}>
                                <Text textStyle="roadmap__card-title">Highly experienced team of buyers</Text>
                                <Text textStyle="roadmap__card-text">Our standarts for our webmasters are superior</Text>
                            </div>
                        </div>
                        <div className={classNames(style.content, style.content__last)}>
                            <Text textStyle="number">4</Text>
            
                            <div className={style.content__text}>
                                <Text textStyle="roadmap__card-title">Fast integration team</Text>
                                <Text textStyle="roadmap__card-text">Just try it</Text>
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

export default React.memo(RoadmapPage)