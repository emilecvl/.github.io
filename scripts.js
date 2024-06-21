document.addEventListener("DOMContentLoaded", function() {
    const pluginList = document.getElementById('plugin-list');

    const plugins = [
        { name: 'Plugin A', progress: '75%', description: 'Description for Plugin A' },
        { name: 'Plugin B', progress: '50%', description: 'Description for Plugin B' },
        { name: 'Plugin C', progress: '90%', description: 'Description for Plugin C' },
    ];

    plugins.forEach(plugin => {
        const pluginDiv = document.createElement('div');
        pluginDiv.className = 'plugin';

        const pluginName = document.createElement('h3');
        pluginName.textContent = plugin.name;

        const pluginProgress = document.createElement('p');
        pluginProgress.textContent = `Avancement: ${plugin.progress}`;

        const pluginDescription = document.createElement('p');
        pluginDescription.textContent = plugin.description;

        pluginDiv.appendChild(pluginName);
        pluginDiv.appendChild(pluginProgress);
        pluginDiv.appendChild(pluginDescription);

        pluginList.appendChild(pluginDiv);
    });
});
