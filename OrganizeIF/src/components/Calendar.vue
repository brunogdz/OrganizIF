<template>
  <div>
    <h1>Oi</h1>
    <Fullcalendar :plguins="calendarPlugins"/>
  </div>
  
</template>

<script>

import Fullcalendar from '@fullcalendar/vue';
import DayGridPlugin from '@fullcalendar/daygrid';
import TimeGridPlugin from '@fullcalendar/timegrid';
import InteractionPlugin from '@fullcalendar/interaction';
import ListPlugin from '@fullcalendar/list';

export default {
 
    data: () => ({
      calendarPlugins: [
        DayGridPlugin,
        TimeGridPlugin,
        InteractionPlugin,
        ListPlugin
      ]
    }),
    components:{
    Fullcalendar
  },
}
</script>

<style>

</style>
