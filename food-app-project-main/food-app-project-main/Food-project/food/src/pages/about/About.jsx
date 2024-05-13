import React from "react";
import { Code2Icon, Github, MapPin } from "lucide-react";
import "./About.css";
import AboutShimmer from "../../components/Shimmer/AboutShimmer";
import { Link } from "react-router-dom";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: true,
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch("https://api.github.com/users/harsh12codes");
            const json = await response.json();

            this.setState({
                data: json,
                loading: false,
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    render() {
        const { avatar_url, name, location, bio, login } = this.state.data;

        return this.state.loading ? (
            <AboutShimmer />
        ) : (
            <div className="about">
                <div className="about-project">
                    <span className="about-title">About Project</span>
                    <div className="about-project-text">
                        <span class="aboutHeading">
                            SavourBite is a food-ordering website that is built on top of the Swiggy
                            API, a well-renowned food ordering platform. By seamlessly integrating
                            technology with culinary expertise, SavourBite aims to provide users
                            with a convenient and enjoyable platform for discovering, ordering, and
                            savoring delicious meals from a variety of restaurants and eateries.
                        </span>
                        <span className="aboutSubHeading">
                            The website boasts a sleek and user-friendly interface that makes
                            browsing through menus and placing orders a breeze. Users can easily
                            search for their favorite restaurant, explore new dining options, and
                            customize their orders to suit their preferences. Whether craving
                            traditional comfort food or exotic international flavors, SavourBite has
                            something to satisfy every palate.
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
