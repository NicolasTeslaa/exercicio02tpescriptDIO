import { Card } from "./Card";
import { Header } from "./Header/Header";

export default function DashboardPage() {
    return (
        <>
            <Header />


            <div className="container">
                <div className="row mt-4">
                    <div className="col">

                        <Card id={1} paragraph="Lorem ipsum dolor sit amet." details="Detalhes do card 1" />
                    </div>
                    <div className="col">
                        <Card id={2} paragraph="Consectetur adipiscing elit." details="Detalhes do card 2" />

                    </div>
                    <div className="col">
                        <Card id={3} paragraph="Consectetur adipiscing elit." details="Detalhes do card 3" />

                    </div>
                    <div className="col">
                        <Card id={4} paragraph="Consectetur adipiscing elit." details="Detalhes do card 4" />

                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">

                        <Card id={1} paragraph="Lorem ipsum dolor sit amet." details="Detalhes do card 1" />
                    </div>
                    <div className="col">
                        <Card id={2} paragraph="Consectetur adipiscing elit." details="Detalhes do card 2" />

                    </div>
                    <div className="col">
                        <Card id={3} paragraph="Consectetur adipiscing elit." details="Detalhes do card 3" />

                    </div>
                    <div className="col">
                        <Card id={4} paragraph="Consectetur adipiscing elit." details="Detalhes do card 4" />

                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">

                        <Card id={1} paragraph="Lorem ipsum dolor sit amet." details="Detalhes do card 1" />
                    </div>
                    <div className="col">
                        <Card id={2} paragraph="Consectetur adipiscing elit." details="Detalhes do card 2" />

                    </div>
                    <div className="col">
                        <Card id={3} paragraph="Consectetur adipiscing elit." details="Detalhes do card 3" />

                    </div>
                    <div className="col">
                        <Card id={4} paragraph="Consectetur adipiscing elit." details="Detalhes do card 4" />

                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">

                        <Card id={1} paragraph="Lorem ipsum dolor sit amet." details="Detalhes do card 1" />
                    </div>
                    <div className="col">
                        <Card id={2} paragraph="Consectetur adipiscing elit." details="Detalhes do card 2" />

                    </div>
                    <div className="col">
                        <Card id={3} paragraph="Consectetur adipiscing elit." details="Detalhes do card 3" />

                    </div>
                    <div className="col">
                        <Card id={4} paragraph="Consectetur adipiscing elit." details="Detalhes do card 4" />

                    </div>
                </div>
            </div>

        </>
    );
}
