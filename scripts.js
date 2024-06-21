document.addEventListener("DOMContentLoaded", function() {
    const pluginList = document.getElementById('plugin-list');

    const plugins = [
        { name: 'Plugin A', progress: '75%' },
        { name: 'Plugin B', progress: '50%' },
        { name: 'Plugin C', progress: '90%' },
    ];

    plugins.forEach(plugin => {
        const pluginDiv = document.createElement('div');
        pluginDiv.className = 'plugin';

        const pluginName = document.createElement('h3');
        pluginName.textContent = plugin.name;

        const pluginProgress = document.createElement('p');
        pluginProgress.textContent = `Avancement: ${plugin.progress}`;

        pluginDiv.appendChild(pluginName);
        pluginDiv.appendChild(pluginProgress);

        pluginList.appendChild(pluginDiv);
    });
});
