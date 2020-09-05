import React, {Component} from "react";
import c from "./BackpackPart.css";
import backpackImage from "../../../assets/images/secondSlide/backpack.png";
import lantern from "../../../assets/images/secondSlide/lantern.png";
import compass from "../../../assets/images/secondSlide/compas.png";
import medicine from "../../../assets/images/secondSlide/medicine.png";
import phone_cable from "../../../assets/images/secondSlide/phone_cable.png";
import powerbank from "../../../assets/images/secondSlide/powerbank.png";
import tshirts from "../../../assets/images/secondSlide/tshirts.png";
import waterbottle from "../../../assets/images/secondSlide/waterbottle.png";
import trainers from "../../../assets/images/secondSlide/trainers.png";


class BackpackPart extends Component {
    state = {
        items: [
            {
                name: "lantern",
                image: lantern,
                translate: "0",
                speed: 0.5
            },
            {
                name: "compass",
                image: compass,
                translate: "100",
                speed: 0.5
            },
            {
                name: "medicine",
                image: medicine,
                translate: "-80",
                speed: 0.5
            },
            {
                name: "phone_cable",
                image: phone_cable,
                translate: "20",
                speed: 0.5
            },
            {
                name: "powerbank",
                image: powerbank,
                translate: "100",
                speed: 0.5
            },
            {
                name: "tshirts",
                image: tshirts,
                translate: "-40",
                speed: 0.5
            },
            {
                name: "waterbottle",
                image: waterbottle,
                translate: "40",
                speed: 0.5
            },
            {
                name: "trainers",
                image: trainers,
                translate: "-30",
                speed: 0.5
            }
        ]
    }

    // componentDidMount() {
    //     document.addEventListener("scroll",this.scrollHandler);
    // }
    //
    // componentWillUnmount() {
    //     document.removeEventListener("scroll",this.scrollHandler);
    // }


    scrollHandler = (e) => {
        return;
        let items = [...this.state.items];
        let pageOffset = window.pageYOffset;
        items.forEach((el,pos) => {
            // let translate = (direction > 0)? 1*el.translate + 0.05*pageOffset: 1*el.translate - 0.05*pageOffset;
            let translate = el.speed*pageOffset;
            items[pos].translate = translate;
        });

        this.setState({
            items: items
        })
    };

    render() {
        let items = this.state.items.map((el) => {
            let name = el.name;
            let parent = c[name + "Wrapper"];
            let cssImageName = c[name + "Image"];
            return (
                <div style={{transform:"translateY("+el.translate + "%)"}} key={name} className={parent}>
                    <img className={cssImageName} src={el.image} alt={name}/>
                </div>
            );
        });

        return (
            <section onWheel={this.scrollHandler} className={c.BackpackPart}>
                <h1>Backpacks №1 in Ukraine</h1>
                <div className={c.backpackItemsWrapper}>
                    <div className={c.backpack}>
                        <img src={backpackImage} alt={"backpackImage"}/>
                    </div>
                    <div className={c.items}>
                        {items}
                    </div>
                </div>
            </section>
        );
    }

}

export default BackpackPart;