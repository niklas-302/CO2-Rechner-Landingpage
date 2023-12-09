<template>
    <div class="background-container">
        <div id="text">
            <h1>Klimafreundlich reisen mit Groß und Klein</h1>
            <p>
                Haben Sie sich schon einmal gefragt, wie viel CO2 Sie mit dem Auto,<br>
                Bus oder der Bahn verbrauchen? Oder welches Verkehrsmittel die klimafreundlichste Wahl<br>
                für Ihre nächste Reise ist? Dann können Sie sich hier einen Überblick verschaffen und ganz einfach<br>
                den CO2-Verbrauch verschiedener Verkehrsmittel für Ihre geplante Strecke berechnen.
            </p>
        </div>

        <div id="container">
            <div class="column">
                <img :src="require('@/assets/platzhalter.png')" alt="CO2-Rechner" />
                <h2>CO2-Rechner</h2>
            </div>
            <div class="column">
                <img :src="require('@/assets/platzhalter.png')" alt="CO2-Rechner für Kids" />
                <h2>CO2-Rechner für Kids</h2>
            </div>
        </div>
    </div>
</template>

<style>
h1,
h2,
p {
    color: black;
    font-family: 'Droid sans';
}

#text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    height: 30vh;
    padding: 20px;

    position: relative;
}

h1 {
    font-size: 50px;
    font-weight: lighter;
}

p {
    font-size: 20px;
}

#container {
    display: flex;
    position: relative;
}

.column {
    flex: 1;
    padding: 20px;
    text-align: center;
}

img {
    width: 500px;
    height: 200px;
}


.background-container {
    align-content: center;
    position: relative;
    height: 100%;
    &::before {
        content: '';
        position: absolute;
        top: 0px; 
        bottom: 0px; 
        left: 0px; 
        right: 0px;
        background-image: url('~@/assets/g1.svg');
        background-repeat: repeat;
        background-size: auto;
        opacity: 0.2;
    }
}
</style>

<script>
export default {
    name: 'HomeViewComponent',
}
</script>