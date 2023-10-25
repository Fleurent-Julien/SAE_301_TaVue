<script>
export default {

props: {

    date: {
        type: String

    }

},
data() {
    return {
        now: 0,
        count: 0,
    }


},

methods: {
    timer_loop() {
        this.count++
        this.now = Math.trunc(new Date().getTime() / 1000)
        console.log(this.now);
        this.count < 200 && setTimeout(this.timer_loop, 1000)
    },
},
mounted() {

    this.timer_loop()
},
computed: {
    seconds() {

        return (this.modifiedDate - this.now) % 60

    },

    minutes() {

        return Math.trunc((this.modifiedDate - this.now) / 60) % 60

    },
    hours() {

        return Math.trunc((this.modifiedDate - this.now) / 60 / 60) % 24

    },
    days() {

        return Math.trunc((this.modifiedDate - this.now) / 60 / 60 / 24)

    },
    modifiedDate: function () {
        return Math.trunc(Date.parse(this.date) / 1000)
    }

}
}
</script>

<template>
    <div class="container">
        <img src="../assets/img/flash.webp" class="absolute w-9/12 ml-16">
        <div class="flex pt-4 justify-evenly">
        <p class="text-white text-3xl font-bold ml-3 z-50">Ventes Flash Halloween -50%</p>
        <p class="text-white text-xl font-bold z-50">Se termine dans : {{ days }} : {{ hours }} : {{ minutes}} : {{ seconds }}</p>
        </div>
    </div>
</template>

<style scoped>
</style>


