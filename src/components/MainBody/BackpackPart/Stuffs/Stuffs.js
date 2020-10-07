import React, {Component} from "react";
import c from "./Stuffs.css";
import backpackImage from "../../../../assets/images/secondSlide/backpack.png";
import lantern from "../../../../assets/images/secondSlide/lantern.png";
import compass from "../../../../assets/images/secondSlide/compas.png";
import medicine from "../../../../assets/images/secondSlide/medicine.png";
import phone_cable from "../../../../assets/images/secondSlide/phone_cable.png";
import powerbank from "../../../../assets/images/secondSlide/powerbank.png";
import tshirts from "../../../../assets/images/secondSlide/tshirts.png";
import waterbottle from "../../../../assets/images/secondSlide/waterbottle.png";
import trainers from "../../../../assets/images/secondSlide/trainers.png";
import Stuff from "./Stuff/Stuff";


class Stuffs extends Component {
    state = {
        items: [
            {
                name: "lantern",
                image: lantern,
                translate: 0,
                rotate: 0,
                speedX: -1,
                speedR: 0.5
            }, {
                name: "compass",
                image: compass,
                translate: 0,
                speedX: -1,
                speedR: -1.5
            }, {
                name: "medicine",
                image: medicine, translate: 0,
                speedX: -0.08,
                speedR: -0.15
            },
            {
                name: "phone_cable",
                image: phone_cable, translate: 0,
                speedX: -0.3,
                speedR: -0.3
            },
            {
                name: "powerbank",
                image: powerbank, translate: 0,
                speedX: -1.5,
                speedR: 0.2
            },
            {
                name: "tshirts",
                image: tshirts, translate: 0,
                speedX: -0.2,
                speedR: -0.3
            },
            {
                name: "waterbottle",
                image: waterbottle, translate: 0,
                speedX: -0.4,
                speedR: 0.7
            },
            {
                name: "trainers",
                image: trainers, translate: 0,
                speedX: -0.23,
                speedR: 0.2
            }]
    }

    componentDidMount() {
        document.addEventListener("scroll", this.scrollHandler);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollHandler);
    }


    scrollHandler = (e) => {
        let items = [...this.state.items];
        let pageOffset = window.pageYOffset;

        items.forEach((el, pos) => {
            let speedX = el.speedX;
            let speedR = el.speedR;

            items[pos].translate = speedX * pageOffset;
            items[pos].rotate = speedR * pageOffset;
        });


        this.setState({
            items: items
        })
    };

    render() {
        let stuffs = this.state.items.map((item) => {
            return (
                <Stuff key={item.name} rotate={item.rotate} translate={item.translate} name={item.name} image={item.image}/>
            );
        });

        return (
            <div className={c.imagesWrapper}>
                <h1 className={c.header}>Top 1 in Ukraine</h1>
                <div className={c.backpackItemsWrapper}>
                    <div className={c.backpack}>
                        <img src={backpackImage} alt={"backpackImage"}/>
                    </div>
                    <div className={c.items}>
                        {stuffs}
                    </div>
                </div>
            </div>
        );
    }

}

export default Stuffs;