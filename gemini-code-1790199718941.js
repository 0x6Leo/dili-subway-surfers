// Police Hamster GIF Canvas Texture
const textureLoader = new THREE.TextureLoader();

// Police GIF Sprite Layer
textureLoader.load('police_run.gif', function (texture) {
  const policeMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const policeSprite = new THREE.Sprite(policeMaterial);
  
  // ক্যারেক্টারের অনুপাত ও সাইজ
  policeSprite.scale.set(2.5, 2.5, 1); 
  policeSprite.position.set(0, 1.2, 0);
  
  police.add(policeSprite);
});