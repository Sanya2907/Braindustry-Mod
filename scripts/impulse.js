const electroBasicBullet2 = extend(BasicBulletType, {
update(b){
if(b.fin()<0.001){
for(var i = 0; i < this.lightning; i++){
Lightning.create(b, this.lightningColor, this.lightningDamage < 0 ? this.damage : this.lightningDamage, b.x, b.y + 2, b.rotation() + Mathf.range(this.lightningCone) + this.lightningAngle, this.lightningLength + Mathf.random(this.lightningLengthRand));
}
}
this.super$update(b);
}
});
electroBasicBullet2.backColor = Color.valueOf("c2cc37");
electroBasicBullet2.width = 4;
electroBasicBullet2.height = 4;
electroBasicBullet2.shrinkY = 0.1;
electroBasicBullet2.shrinkX = 0.2;
electroBasicBullet2.spin = 1.2;
electroBasicBullet2.speed = 2.1;
electroBasicBullet2.damage = 11;
electroBasicBullet2.shootEffect = Fx.shockwave;
electroBasicBullet2.hitColor = electroBasicBullet.frontColor = Color.valueOf("f1fc58");
electroBasicBullet2.despawnEffect = Fx.hitLancer;
electroBasicBullet2.lifetime = 60;
electroBasicBullet2.knockback = 1;
electroBasicBullet2.lightning = 3;//количество молний
electroBasicBullet2.lightningLength = 5;//длина молнии
electroBasicBullet2.lightningLengthRand = 5;//рнадомная длина
electroBasicBullet2.lightningDamage = 32;//урон молнии
electroBasicBullet2.lightningAngle = 5;//угол направления молний относительно угла пули
electroBasicBullet2.lightningCone = 20;//рандомизация угла направления молний 
electroBasicBullet2.lightningColor = Color.valueOf("f1fc58");

const electricArc = extendContent(ItemTurret, "impulse", {});
electricArc.health = 840;
electricArc.size = 1;
electricArc.rotateSpeed = 1.8;
electricArc.shots = 1;
electricArc.reloadTime = 30;
electricArc.hasItems = true;
electricArc.hasLiquids = true;
electricArc.range = 130;
electricArc.localizedName = "Impulse";
electricArc.description = "Arc upgraded version, can make more lightnings and shot a one basic bullet.";
electricArc.buildVisibility = BuildVisibility.shown;
electricArc.requirements = ItemStack.with(Items.lead, 80, Vars.content.getByName(ContentType.item,"braindustry-graphenite"), 20, Items.silicon, 45, Items.copper, 100);
electricArc.category = Category.turret;
electricArc.ammo(
    Items.silicon, electroBasicBullet2
);
