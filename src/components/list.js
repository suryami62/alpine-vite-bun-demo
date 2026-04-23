export const list = () => ({
  items: [],
  newItem: '',
  addItem() {
    if (this.newItem.trim() === '') return;
    this.items.push(this.newItem.trim());
    this.newItem = '';
  },
  removeItem(index) { this.items.splice(index, 1); },
  sortItems() { this.items.sort((a, b) => a.localeCompare(b)); }
});
