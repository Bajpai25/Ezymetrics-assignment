import React, { useState } from 'react';
import { 
  Users, 
  BarChart3, 
  FileText, 
  Plus,
  X,
  Edit2,
  Check
} from 'lucide-react';
import Layout from './Layout';

const Widget = ({ title, icon: Icon, onDelete, onUpdateTitle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleSave = () => {
    onUpdateTitle(editedTitle);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };
  

  return (
    <div className="bg-white rounded-lg shadow-md h-40 relative p-4">
      <div className="absolute top-2 right-2 flex space-x-2">
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Edit2 size={16} />
          </button>
        )}
        <button
          onClick={onDelete}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <X size={16} />
        </button>
      </div>
      
      <div className="h-full flex flex-col items-center justify-center space-y-2">
        <Icon size={24} className="text-blue-600" />
        {isEditing ? (
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-32 h-8 text-sm border rounded px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <button
              onClick={handleSave}
              className="text-green-500 hover:text-green-600"
            >
              <Check size={16} />
            </button>
          </div>
        ) : (
          <h3 className="font-medium text-sm text-gray-700">{title}</h3>
        )}
      </div>
    </div>
  );
};

const Widgets = () => {
  const [widgets, setWidgets] = useState([
    { id: '1', title: 'Leads', icon: Users },
    { id: '2', title: 'Analytics', icon: BarChart3 },
    { id: '3', title: 'Reports', icon: FileText }
  ]);

  const [newWidgetTitle, setNewWidgetTitle] = useState('');
  const [showTitleInput, setShowTitleInput] = useState(false);

  const handleAddWidget = () => {
    if (!showTitleInput) {
      setShowTitleInput(true);
      return;
    }

    if (newWidgetTitle.trim()) {
      const newWidget = {
        id: String(widgets.length + 1),
        title: newWidgetTitle,
        icon: BarChart3
      };
      setWidgets([...widgets, newWidget]);
      setNewWidgetTitle('');
      setShowTitleInput(false);
    }
  };

  const handleDeleteWidget = (id) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
  };

  const handleUpdateTitle = (id, newTitle) => {
    setWidgets(widgets.map(widget =>
      widget.id === id ? { ...widget, title: newTitle } : widget
    ));
  };

  return (
    <div>
    <div className="p-6 bg-gray-50 h-auto w-full">
      <div className="flex flex-wrap gap-6 justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Widgets</h2>
        <div className="flex items-center space-x-2">
          {showTitleInput && (
            <input
              type="text"
              value={newWidgetTitle}
              onChange={(e) => setNewWidgetTitle(e.target.value)}
              placeholder="Enter widget title"
              className="w-40 h-9 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleAddWidget();
              }}
              autoFocus
            />
          )}
          <button 
            onClick={handleAddWidget}
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
          >
            <Plus size={16} />
            <span>{showTitleInput ? 'Add' : 'Add Widget'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {widgets.map((widget) => (
          <Widget
            key={widget.id}
            title={widget.title}
            icon={widget.icon}
            onDelete={() => handleDeleteWidget(widget.id)}
            onUpdateTitle={(newTitle) => handleUpdateTitle(widget.id, newTitle)}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Widgets;