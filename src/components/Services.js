import React, { Component } from 'react'
import Title from "./Title"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa" 

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info: 'Occaecat adipisicing proident nulla reprehenderit eiusmod proident eiusmod excepteur consequat voluptate laborum aliqua deserunt ut.'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'Occaecat adipisicing proident nulla reprehenderit eiusmod proident eiusmod excepteur consequat voluptate laborum aliqua deserunt ut.'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info: 'Occaecat adipisicing proident nulla reprehenderit eiusmod proident eiusmod excepteur consequat voluptate laborum aliqua deserunt ut.'
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: 'Occaecat adipisicing proident nulla reprehenderit eiusmod proident eiusmod excepteur consequat voluptate laborum aliqua deserunt ut.'
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (<article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
