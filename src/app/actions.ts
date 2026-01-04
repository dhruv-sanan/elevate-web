'use server'

export async function selectPlan(planName: string) {
    // Simulate a database call or backend processing
    console.log(`[Backend] User selected plan: ${planName}`);

    // In a real app, this might create a checkout session or save the user's preference
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate latency

    return { success: true, message: `Plan '${planName}' selected successfully` };
}

export async function addToPackage(addonName: string) {
    // Simulate a database call or backend processing
    console.log(`[Backend] User added to package: ${addonName}`);

    // In a real app, this might update a cart or order draft
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate latency

    return { success: true, message: `${addonName} added to package` };
}
