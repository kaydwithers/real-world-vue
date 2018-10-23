<template>
  <div class="EventCard">
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" 
      :key="event.id"
      :event="event"
    />
    <template v-if="page != 1">
      <router-link rel="prev"
        :to="{ 
          name: 'event-list', 
          query: { 
            page: page - 1 
          }
        }" 
      >
        Prev Page
      </router-link> | 
    </template>
    <router-link rel="prev"
      :to="{ 
        name: 'event-list', 
        query: { 
          page: page + 1 
        }
      }" 
    >
      Next Page
    </router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      events: []
    }
  },
  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: 3,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.perPage
    },
    ...mapState(['event', 'user'])
  },
  components: {
    EventCard
  }
}
</script>
