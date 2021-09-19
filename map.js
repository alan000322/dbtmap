//會放三個結構 data/methods/mounted
Vue.createApp({
    data() {
        return {
            courseFilter: 'all',
            q: '',
            c_dbt: 'false',
            CourseList:  parse(JSON.stringify(C_List)),


        }
    }, //data
    methods: {

    }, //methods
    computed: {
        filterCourseList: function filterList() {
            query = this.q.trim()
            if (query != '') { return this.CourseList.filter((item) => 
                item.course.indexOf(query)  != -1 || 
                item.teacher.indexOf(query) != -1 
                )} //
            if (this.c_dbt == true) { return this.CourseList.filter((item) => item.Dtag == "DBT") }
            else { return this.CourseList }
        }// filterList()
    }, //computed
    mounted: function() {
        console.log(this.text)
        // 適合初始化資料
    },
}).mount('#app')