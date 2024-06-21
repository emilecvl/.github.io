document.addEventListener("DOMContentLoaded", function() {
    const pluginList = document.getElementById('plugin-list');

    const plugins = [
        { name: '1', progress: '75%', description: 'Description' },
        { name: '2', progress: '50%', description: 'Description' },
        { name: '3', progress: '90%', description: 'Description' },
    ];

    plugins.forEach(plugin => {
        const pluginDiv = document.createElement('div');
        pluginDiv.className = 'Nom';

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
