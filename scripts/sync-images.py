import os, glob, shutil

brain_dir = r"C:\Users\Isa\.gemini\antigravity\brain\b313dfb8-fac8-4ac0-8148-5184c9a13668"
base_img_dir = os.path.join(os.path.dirname(__file__), "..", "src", "images")

mapping = {
    "*cnc_fiber_laser_cutting*": os.path.join(base_img_dir, "equipment", "iron-mac-3015c.jpg"),
    "*cnc_press_brake_bending*": os.path.join(base_img_dir, "equipment", "cnc-press-brake.jpg"),
    "*cnc_plasma_cutting_table*": os.path.join(base_img_dir, "equipment", "plasma-cutter.jpg"),
    "*hydraulic_guillotine_shears*": os.path.join(base_img_dir, "equipment", "guillotine-shears.jpg"),
    "*tig_argon_welding*": os.path.join(base_img_dir, "equipment", "welding-tig-mig.jpg"),
    "*cnc_lathe*": os.path.join(base_img_dir, "equipment", "cnc-lathe.jpg"),
    "*powder_coating*": os.path.join(base_img_dir, "equipment", "powder-coating.jpg"),
    "*lstk_steel_structure*": os.path.join(base_img_dir, "cases", "warehouse-frame.jpg"),
    "*telecom_server_racks*": os.path.join(base_img_dir, "cases", "telecom-cabinets.jpg"),
    "*cable_tray*": os.path.join(base_img_dir, "cases", "cable-project.jpg"),
    "*industrial_louvered*": os.path.join(base_img_dir, "cases", "bktp-gates.jpg"),
    "*commercial_pavilion*": os.path.join(base_img_dir, "cases", "commercial-pavilion.jpg"),
    "*modular_pavilion*": os.path.join(base_img_dir, "cases", "commercial-pavilion.jpg"),
    "*food_equipment*": os.path.join(base_img_dir, "cases", "food-equipment.jpg"),
    "*stainless*": os.path.join(base_img_dir, "cases", "food-equipment.jpg"),
    "*exterior*": os.path.join(base_img_dir, "factory", "plant-exterior.jpg"),
    "*plant_exterior*": os.path.join(base_img_dir, "factory", "plant-exterior.jpg"),
}

os.makedirs(os.path.join(base_img_dir, "equipment"), exist_ok=True)
os.makedirs(os.path.join(base_img_dir, "cases"), exist_ok=True)
os.makedirs(os.path.join(base_img_dir, "factory"), exist_ok=True)

copied = 0
for pattern, dest in mapping.items():
    matches = glob.glob(os.path.join(brain_dir, pattern))
    if matches:
        latest = max(matches, key=os.path.getmtime)
        shutil.copy2(latest, dest)
        print(f"Copied {os.path.basename(latest)} -> {os.path.relpath(dest, base_img_dir)}")
        copied += 1

print(f"Total synced: {copied}")
