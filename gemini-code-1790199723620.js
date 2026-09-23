// Dili GIF Character Load
const textureLoader = new THREE.TextureLoader();
textureLoader.load('dili.gif', function (texture) {
  const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
  const diliSprite = new THREE.Sprite(spriteMaterial);
  diliSprite.scale.set(2, 2, 1); // ক্যারেক্টারের সাইজ
  diliSprite.position.set(0, 1, 0);
  player.add(diliSprite);
});

// Police Hamster GIF Load
textureLoader.load('police.gif', function (texture) {
  const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
  const policeSprite = new THREE.Sprite(spriteMaterial);
  policeSprite.scale.set(2.2, 2.2, 1);
  policeSprite.position.set(0, 1.1, 0);
  police.add(policeSprite);
});