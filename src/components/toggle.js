export const toggle = () => ({
  isOpen: false,
  toggle() { this.isOpen = !this.isOpen; }
});
