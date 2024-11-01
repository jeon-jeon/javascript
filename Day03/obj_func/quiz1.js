const gym = {
  memList: [],

  getInf() {
    // const name = prompt("이름");
    // const age = Number(prompt("나이"));
    // const address = prompt("주소");
    // this.memList.push(name);
    // this.memList.push(age);
    // this.memList.push(address);

    const member = {
      name: prompt("이름"),
      age: Number(prompt("나이")),
      address: prompt("주소"),
    };
    this.memList.push(member);
  },

  showList() {
    console.log(`헬스장 멤버 리스트 : ${this.memList}`);
  },
};

gym.getInf();
gym.getInf();
gym.showList();
