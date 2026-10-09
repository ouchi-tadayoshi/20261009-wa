Vue.createApp({
  data() {
    return {
	    users: [
            {id: 1, name: "山田太郎" },
            {id: 2, name: "佐藤花子" },
            {id: 3, name: "鈴木一郎" },
        ]
    };
  }
}).mount("#app");