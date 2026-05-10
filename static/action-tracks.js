(function(root, factory) {
  const exported = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = exported;
  }
  root.SCOPE_ACTION_DATA = exported;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  const C = (label, cls) => ({ label, cls });
  const ARR = { arrow: true };
  const S = ({ move, camera, buttons = [], chips }) => ({ move, camera, buttons, chips });

  const actionTracks = {
    1: [
      S({ move: { y: -1 }, buttons: ['lt', 'rt'], chips: [C('LY-','chip-move'), C('LT','chip-aim'), C('RT','chip-fire')] }),
      S({ buttons: ['y'], chips: [C('Y','chip-weapon')] }),
      S({ move: { y: -1 }, chips: [C('LY-','chip-move')] }),
    ],
    2: [
      S({ move: { x: 1, y: -1 }, camera: { x: 1 }, chips: [C('LX+','chip-move'), C('LY-','chip-move'), C('RX+','chip-turn')] }),
      S({ move: { y: -1 }, chips: [C('LY-','chip-move')] }),
      S({ buttons: ['a'], chips: [C('A','chip-jump')] }),
      S({ move: { x: 1, y: -1 }, chips: [C('LX+','chip-move'), C('LY-','chip-move')] }),
      S({ buttons: ['lt', 'rt'], chips: [C('LT','chip-aim'), C('RT','chip-fire')] }),
      S({ move: { x: 1, y: -1 }, chips: [C('LX+','chip-move'), C('LY-','chip-move')] }),
    ],
    3: [
      S({ move: { x: -1 }, camera: { x: -1 }, buttons: ['lt'], chips: [C('LX-','chip-move'), C('RX-','chip-turn'), C('LT','chip-aim')] }),
      S({ camera: { x: -1 }, chips: [C('RX-','chip-turn')] }),
      S({ buttons: ['rt', 'a'], chips: [C('RT','chip-fire'), C('A','chip-jump')] }),
      S({ move: { x: -1 }, buttons: ['rt', 'a'], chips: [C('LX-','chip-move'), C('RT','chip-fire'), C('A','chip-jump')] }),
      S({ move: { x: -1 }, buttons: ['rt'], chips: [C('LX-','chip-move'), C('RT','chip-fire')] }),
    ],
    4: [
      S({ move: { x: 1, y: 1 }, camera: { x: 1 }, buttons: ['lt'], chips: [C('LX+','chip-move'), C('LY+','chip-move'), C('RX+','chip-turn'), C('LT','chip-aim')] }),
      S({ camera: { x: 1 }, chips: [C('RX+','chip-turn')] }),
      S({ buttons: ['rt', 'a'], chips: [C('RT','chip-fire'), C('A','chip-jump')] }),
      S({ move: { x: 1, y: 1 }, buttons: ['rt', 'a'], chips: [C('LX+','chip-move'), C('LY+','chip-move'), C('RT','chip-fire'), C('A','chip-jump')] }),
      S({ move: { x: 1, y: 1 }, buttons: ['rt'], chips: [C('LX+','chip-move'), C('LY+','chip-move'), C('RT','chip-fire')] }),
    ],
    5: [
      S({ move: { y: -1 }, chips: [C('LY-','chip-move')] }),
      S({ buttons: ['lt', 'rt', 'a'], chips: [C('LT','chip-aim'), C('RT','chip-fire'), C('A','chip-jump')] }),
      S({ buttons: ['x'], chips: [C('X','chip-reload')] }),
      S({ camera: { x: 1 }, chips: [C('RX+','chip-turn')] }),
      S({ move: { y: -1 }, chips: [C('LY-','chip-move')] }),
    ],
    6: [
      S({ move: { y: -1 }, chips: [C('LY-','chip-move')] }),
      S({ buttons: ['lt', 'rt', 'a'], chips: [C('LT','chip-aim'), C('RT','chip-fire'), C('A','chip-jump')] }),
      S({ camera: { x: 1 }, chips: [C('RX+','chip-turn')] }),
      S({ move: { y: -1 }, chips: [C('LY-','chip-move')] }),
    ],
    7: [
      S({ move: { y: -1 }, chips: [C('LY-','chip-move')] }),
      S({ buttons: ['rt'], chips: [C('RT','chip-fire')] }),
      S({ buttons: ['x', 'a'], chips: [C('X','chip-reload'), C('A','chip-jump')] }),
      S({ camera: { x: -1 }, chips: [C('RX-','chip-turn')] }),
      S({ move: { y: -1 }, chips: [C('LY-','chip-move')] }),
    ],
    8: [
      S({ move: { y: -1 }, camera: { x: 1 }, chips: [C('LY-','chip-move'), C('RX+','chip-turn')] }),
      S({ buttons: ['lt', 'rt'], chips: [C('LT','chip-aim'), C('RT','chip-fire')] }),
    ],
    9: [
      S({ move: { y: -1 }, chips: [C('LY-','chip-move')] }),
      S({ move: { x: 1, y: -1 }, chips: [C('LX+','chip-move'), C('LY-','chip-move')] }),
    ],
    10: [
      S({ buttons: ['lt', 'rt'], chips: [C('LT','chip-aim'), C('RT','chip-fire')] }),
    ],
    11: [
      S({ move: { x: 1 }, buttons: ['lt', 'rt', 'a'], chips: [C('LX+','chip-move'), C('LT','chip-aim'), C('RT','chip-fire'), C('A','chip-jump')] }),
      S({ move: { x: -1 }, buttons: ['lt', 'rt', 'a'], chips: [C('LX-','chip-move'), C('LT','chip-aim'), C('RT','chip-fire'), C('A','chip-jump')] }),
    ],
    12: [
      S({ move: { x: -1, y: -1 }, chips: [C('LX-','chip-move'), C('LY-','chip-move')] }),
      S({ buttons: ['rt'], chips: [C('RT','chip-fire')] }),
      S({ move: { x: 1, y: -1 }, chips: [C('LX+','chip-move'), C('LY-','chip-move')] }),
    ],
    ctrl_scope_fire1: [
      S({ buttons: ['lt'], chips: [C('LT','chip-aim')] }),
      S({ buttons: ['rt'], chips: [C('RT','chip-fire')] }),
    ],
    ctrl_scope_fire2: [
      S({ buttons: ['lt'], chips: [C('LT','chip-aim')] }),
      S({ buttons: ['rt'], chips: [C('RT','chip-fire')] }),
    ],
    ctrl_fire_reload: [
      S({ buttons: ['rt'], chips: [C('RT','chip-fire')] }),
      S({ buttons: ['x'], chips: [C('X','chip-reload')] }),
    ],
  };

  const actionSeqs = Object.fromEntries(
    Object.entries(actionTracks).map(([key, track]) => {
      const seq = [];
      track.forEach((segment, index) => {
        if (index > 0) seq.push(ARR);
        seq.push(...segment.chips);
      });
      return [key, seq];
    })
  );

  return { actionTracks, actionSeqs };
});
