export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(name) {
        if (this.members.has(name)) {
            throw new Error('такой персонаж уже есть в команде')
        } else {
          this.members.add(name)
        }
    }
  
    addAll(...names) {
      names.forEach((name) => {
        this.members.add(name);      
      })
    }
  
    toArray() {
      return Array.from(this.members)
    }

    [Symbol.iterator]() {
        let members = Array.from(this.members)
        let nextIndex = 0;
        return {
            next: function(){
                return nextIndex < members.length ?
                    {value: members[nextIndex++], done: false} :
                    {done: true};
            }
         }
    }
}
  