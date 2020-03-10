<script>
  import {Bar} from 'vue-chartjs'

  export default {
    extends: Bar,

    methods: {
      // return array of eg: {aflClub: "Adelaide", count: 12}
      countPlayersPerAflClub()
      {
        // build a map of club name => drafted players count, then turn into sorted array of objects
        const map = new Map()
        this.$store.state.drafting.players
          .filter(a => a.draftedBy)
          .forEach(p => map.set(p.aflClub, (map.get(p.aflClub) || 0) + 1))

        const res = []
        map.forEach((v, k) => res.push({aflClub: k, count: v}))
        return res.sort((a, b) => (a.aflClub < b.aflClub) ? -1 : (a.aflClub > b.aflClub) ? 1 : 0)
      }
    },

    mounted () {
      const counts = this.countPlayersPerAflClub()
      this.renderChart(
        {
          labels: counts.map(c => c.aflClub),
          datasets: [{
            label: 'Players per AFL Club',
            backgroundColor: 'green',
            borderColor: 'lightgray',
            data: counts.map(c => c.count)
          }]
        },
        {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
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
