<script>
  import {Scatter} from 'vue-chartjs'

  export default {
    extends: Scatter,

    methods: {
      // return array of eg: {cents: "20", count: 12}
      countPlayersPerCost()
      {
        // build a map of cents => drafted players count, then turn into sorted array of objects
        const map = new Map()
        this.$store.state.drafting.players
          .filter(a => a.draftedBy)
          .forEach(p => map.set(p.cents, (map.get(p.cents) || 0) + 1))

        const res = []
        map.forEach((v, k) => res.push({cents: k, count: v}))
        return res.sort((a, b) => (a.cents < b.cents) ? -1 : (a.cents > b.cents) ? 1 : 0)
      }
    },

    mounted () {
      const counts = this.countPlayersPerCost()
      this.renderChart(
        {
          labels: counts.map(c => c.cents / 100),
          datasets: [{
            label: 'Player Cost',
            backgroundColor: 'orange',
            borderColor: 'lightgray',
            data: counts.map(c => ({x: c.cents / 100, y: c.count}))
          }]
        },
        {
          scales: {
            xAxes: [{
              ticks: {
                stepSize: 0.5
              }
            }]
          }
        }
      )
    }
  }
</script>

<style>
</style>
